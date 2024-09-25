'use client';

import {useState} from "react";
import useRichText from "@/src/app/hooks/api/useRichText";
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Transition } from '@headlessui/react'

function Tabs({items}) {
  const { parseBodyText } = useRichText();
  const [tabIndex, setTabIndex] = useState(0);
  
    return (
        <TabGroup
          selectedIndex={tabIndex}
          onChange={setTabIndex}
          defaultIndex={0}
          className={'grid gap-10 lg:gap-20 grid-flow-rows lg:grid-flow-col lg:auto-cols-max overflow-hidden relative'}>
            <TabList className={'flex space-x-6 overflow-x-auto lg:overflow-x-none lg:space-x-0 lg:grid lg:grid-cols-1 pb-2 border-b lg:border-b-0 lg:pb-0 lg:border-l lg:pl-5 lg:max-w-[300px] lg:max-h-[180px]'}>
              {items?.map((item, idx) => {
                return (
                  <Tab
                    key={idx}
                    className={'outline-none lg:max-w-[250px] text-left lg:p-2'}>
                    {({ selected }) => (
                      <p className={`${selected ? 'text-rose-500' : ''} duration-550 transition-all ease-in-out`}>{item.fields.title}</p>
                    )}
                  </Tab>
                )
              })}
            </TabList>
            <TabPanels className={'grid grid-cols-1 w-full max-w-[800px]'}>
              {items?.map((item, idx) => {
                return (
                  <TabPanel key={idx}>
                    <Transition appear show={tabIndex === idx}
                                enter="transition-opacity duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                      <div>
                        <div className={'flex flex-col mb-4 lg:mb-0 lg:flex-row lg:gap-2'}>
                          <h3 className={'text-[18px] lg:mb-2'}>
                            {item.fields.position}
                          </h3>
                          {item.fields.companyLink &&
                            <a href={item.fields.companyLink} target={'_blank'} rel="noopener noreferrer" className={'lg:ml-2 text-[18px] text-rose-500'}>
                              <span className={'mr-[5px]'}>@</span>{item.fields.title}
                            </a>
                          }
                        </div>
                        <p className={'text-[13px] mb-10'}>{item.fields.date}</p>
                        <div className={'text-[15px] lg:text-[16px] w-full max-w-[330px] lg:max-w-full'}>
                          {parseBodyText(item.fields.description)}
                        </div>
                      </div>
                    </Transition>
                  </TabPanel>
                )
              })}
            </TabPanels>
        </TabGroup>
    );
}

export default Tabs;
