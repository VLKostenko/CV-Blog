'use client';

import React, { useState } from "react";
import useRichText from "@/src/app/hooks/api/useRichText";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function Tabs({items}) {
  const { parseBodyText } = useRichText();
  const [activeTab, setActiveTab] = useState(0)
  
    return (
        <TabGroup activeTab={activeTab} defaultIndex={0} className={'grid grid-cols-2'}>
            <TabList className={'grid grid-cols-1 justify-start border-l pl-5'}>
              {items?.map((item, idx) => {
                return (
                  <Tab
                    key={idx}
                    onClick={() => { setActiveTab(idx) }}
                    className={'outline-none max-w-[250px] text-left p-2'}>
                    {({ selected }) => (
                      <p className={`${selected ? 'text-rose-500' : ''} duration-550 transition-all ease-in-out`}>{item.fields.title}</p>
                    )}
                  </Tab>
                )
              })}
            </TabList>
            <TabPanels className={'grid grid-cols-1'}>
              {items?.map((item, idx) => {
                return (
                  <TabPanel key={idx}>
                    {({ selected }) => (
                      <div className={`${selected ? 'delay-200 text-[#000]' : 'text-[#fff]' } duration-550 transition-all ease-in-out`}>
                        <h3 className={'text-[17px] mb-2'}>{item.fields.position}</h3>
                        <p className={'text-[13px] mb-10'}>{item.fields.date}</p>
                        <div className={'text-[15px]'}>{parseBodyText(item.fields.description)}</div>
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
