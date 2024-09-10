import React from 'react';
import Link from 'next/link';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HEADING_1 = ({ children }) => <h1 className="mb-5">{children}</h1>;
const HEADING_2 = ({ children }) => <h2 className="mt-3 mb-3">{children}</h2>;
const HEADING_3 = ({ children }) => <h3 className="mt-3 mb-3">{children}</h3>;
const HEADING_6 = ({ children }) => <h6 className="mt-3 mb-3">{children}</h6>;
const PARAGRAPH = ({ children }) => <p className="mt-0 mb-0">{children}</p>;
const UL_LIST = ({ children }) => <ul className="mt-3 mb-3">{children}</ul>;
const OL_LIST = ({ children }) => <ol className="mt-3 mb-3">{children}</ol>;
const LIST_ITEM = ({ children }) => <li className="mt-3 mb-3">{children}</li>;
const LINK = ({ node, children }) => <a className="link-outside" target='_blank' href={`${node.data.uri.startsWith('mailto:') ? node.data.uri : node.data.uri && node.data.uri.includes('@') ? 'mailto:' + node.data.uri : node.data.uri}`}>{children}</a>;

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const assetType = node.data.target.fields.file.contentType;
      const contentGroup = assetType.split('/')[0];

      switch (contentGroup) {
        case 'video':
          return (
            <video width="100%" height="100%" controls className={'richText-video'}>
              <source src={node.data.target.fields.file.url} type="video/mp4" />
            </video>
          );
        case 'image':
          return (
            <img
              className={'richText-img'}
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.title}
            />
          );
        default:
          return null;
      }
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <HEADING_1>{children}</HEADING_1>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <HEADING_2>{children}</HEADING_2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <HEADING_3>{children}</HEADING_3>
      )
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return (
        <HEADING_6>{children}</HEADING_6>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <PARAGRAPH>{children}</PARAGRAPH>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <LINK node={node}>{children}</LINK>
      )
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <UL_LIST node={node}>{children}</UL_LIST>
      )
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <OL_LIST node={node}>{children}</OL_LIST>
      )
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <LIST_ITEM node={node}>{children}</LIST_ITEM>
      )
    }
  },
};

export default function useRichText() {
  const parseBodyText = (body) => {
    const parsedText = documentToReactComponents(body, renderOptions);

    return parsedText;
  };

  return {
    parseBodyText
  };
}
