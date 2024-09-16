'use client';

import useRichText from "@/src/app/hooks/api/useRichText";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function Tabs({items}) {
  const { parseBodyText } = useRichText();
  
    return (
        <TabGroup defaultIndex={0} className={'grid gap-20 grid-flow-col auto-cols-max'}>
            <TabList className={'grid grid-cols-1 items-start border-l pl-5 max-w-[300px] max-h-[200px]'}>
              {items?.map((item, idx) => {
                return (
                  <Tab
                    key={idx}
                    className={'outline-none max-w-[250px] text-left p-2'}>
                    {({ selected }) => (
                      <p className={`${selected ? 'text-rose-500' : ''} duration-550 transition-all ease-in-out`}>{item.fields.title}</p>
                    )}
                  </Tab>
                )
              })}
            </TabList>
            <TabPanels className={'grid grid-cols-1 max-w-[600px]'}>
              {items?.map((item, idx) => {
                return (
                  <TabPanel key={idx}>
                    {({ selected }) => (
                      <div className={`${selected ? 'delay-200 text-[#000]' : 'text-[#fff]' } pt-2 duration-550 transition-all ease-in-out`}>
                        <div className={'flex gap-2'}>
                          <h3 className={'text-[18px] mb-2'}>
                            {item.fields.position}
                          </h3>
                          {item.fields.companyLink &&
                            <a href={item.fields.companyLink} target={'_blank'} rel="noopener noreferrer" className={'ml-2 text-[18px] text-rose-500'}>
                              <span className={'mr-[5px]'}>@</span>{item.fields.title}
                            </a>
                          }
                        </div>
                        <p className={'text-[13px] mb-10'}>{item.fields.date}</p>
                        <div className={'text-[16px]'}>{parseBodyText(item.fields.description)}</div>
                      </div>
                    )}
                  </TabPanel>
                )
              })}
            </TabPanels>
        </TabGroup>
    );
}

export default Tabs;
