import Image from "next/image";
import {revalidateTag} from "next/cache";

// Components
import Tabs from "@/src/app/components/tabs";

// Hooks
import {getCachedItems} from "@/src/app/hooks/api/getCachedItems";
import useRichText from "@/src/app/hooks/api/useRichText";
import BackgroundWithPlaceholder from "@/src/app/components/backgroundWithPlaceholder";

// Seo
export const metadata = {
  title: `Volodymyr Kostenko Portfolio`,
  description: `Volodymyr Kostenko Personal Web Site, which contains a list of my works, my experience, and my skills.`,
  openGraph: {
    images: '/image/horizonlogo-black.png',
  },
};

export default async function Page() {
  
  revalidateTag('home');
  
  const data = await getCachedItems('2gkivy2tNKbwuPz49cweUW');
  const aboutSection = data?.aboutSection || {};
  const heroSection = data?.heroSection || {};
  const experienceSection = data?.experienceSection || {};
  const workSection = data?.workSection || {};
  const contactSection = data?.contactSection || {};
  
  const {
    heroTitle,
    heroDescription,
    heroSecondDescription,
    heroAccentText,
    heroSubTitle,
  } = heroSection?.fields;
  
  const {
	  aboutTitle,
    aboutDescription,
	  aboutTechnologiesList,
    aboutImage
  } = aboutSection?.fields;
  
  const {
    experienceTitle,
    experienceItems,
  } = experienceSection?.fields;
  
  const {
    workTitle,
    workItems,
  } = workSection?.fields;
  
  const {
    contactTitle,
    contactDescription,
    contactButtonText,
    contactEmail
  } = contactSection?.fields;
  
  const { parseBodyText } = useRichText();
  
  return (
    <div className="container mx-auto px-8">
      <section id={'hero'} className={'py-60 text-left lg:min-h-screen'}>
        <h3 className={'text-lg mb-5'}>{heroTitle}</h3>
        <h1 className={'text-4xl lg:text-6xl mb-5 leading-[50px] lg:leading-[70px]'}>{heroDescription}</h1>
        <h1 className={'text-4xl lg:text-6xl mb-5 leading-[50px] lg:leading-[70px]'}>
          {heroSecondDescription} <span className={'text-rose-500'}>{heroAccentText}</span>
        </h1>
        <h4 className={'text-lg mb-5'}>{heroSubTitle}</h4>
      </section>
      
      <section id={'about'} className={'pb-60 lg:max-w-[1200px] container mx-auto'}>
        <h2 className={'mb-5 relative after:absolute after:ml-[20px] after:top-[12px] after:content-[""] after:w-[30%] lg:after:w-[400px] after:h-[1px] after:bg-[#ccc]'}><span className={'pr-2 text-rose-500'}>01.</span>{aboutTitle}</h2>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-20'}>
          <div className={''}>
            <div>{parseBodyText(aboutDescription)}</div>
            <ol className={'grid grid-cols-2 gap-3.5 pt-5'}>
              {aboutTechnologiesList.map((list, idx) => {
                return (
                  <li key={idx} className={'flex gap-5 items-center relative text-[13px]'}>
                    {list?.fields?.linkImage ?
                    <div className={'w-[30px] h-[30px] relative'}>
                      <Image
                        className={'rounded-md grayscale'}
                        src={'https:' + list?.fields?.linkImage.fields.file.url}
                        quality={100}
                        width={list.fields.linkImage.fields.file.details.image.width}
                        height={list.fields.linkImage.fields.file.details.image.height}
                        alt="Stack Image"
                      />
                    </div>
                      :
                      'none'
                    }
                    {list.fields.title}
                  </li>
                )
              })}
            </ol>
          </div>
          
          <div className={'w-[350px] mx-auto lg:mx-0 relative'}>
            <Image
              className={'rounded-md grayscale'}
              src={'https:' + aboutImage?.fields.file.url}
              quality={100}
              width={aboutImage.fields.file.details.image.width}
              height={aboutImage.fields.file.details.image.height}
              alt="User Image"
            />
          </div>
        </div>
      </section>
      
      <section id={'experience'} className={'mb-5 pb-60 container lg:max-w-[1024px] mx-auto'}>
        <h2 className={'mb-5 relative after:absolute after:ml-[20px] after:top-[12px] after:content-[""] after:w-[30%] lg:after:w-[400px] after:h-[1px] after:bg-[#ccc]'}>
          <span className={'pr-2 text-rose-500'}>
            02.</span>{experienceTitle}
        </h2>
        <Tabs items={experienceItems} />
      </section>
      
      <section id={'work'} className={'pb-40 container mx-auto'}>
        <h2 className={'mb-10 relative after:absolute after:ml-[20px] after:top-[12px] after:content-[""] after:w-[30%] lg:after:w-[400px] after:h-[1px] after:bg-[#ccc]'}>
          <span className={'pr-2 text-rose-500'}>03.</span>{workTitle}
        </h2>
        <div className={'grid grid-cols-1 gap-20'}>
          {workItems.map((work, idx) => {
            return (
              <div key={idx} className={'grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-20'}>
                <div className={'w-full lg:w-[500px] lg:h-[360px] relative order-1 lg:-order-1'}>
                  <BackgroundWithPlaceholder
                    classImg={'rounded-md'}
                    alt={'https:' + work.fields.image.fields.title}
                    background={'https:' + work.fields.image.fields.file.url}
                    width={work.fields.image.fields.file.details.image.width}
                    height={work.fields.image.fields.file.details.image.height}
                  />
                </div>
                <div>
                  <a
                    className={'text-2xl block mb-5  text-rose-500'}
                    href={work.fields.link}
                    target={'_blank'}
                    rel="noopener noreferrer">
                    {work.fields.title}
                  </a>
                  <div className={'text-[16px] mb-8'}>{parseBodyText(work.fields.description)}</div>
                  <div className={'flex flex-row gap-x-5 gap-y-5 flex-wrap lg:p-2'}>
                    {work.fields.stack.map((stack, idx) => {
                    return (
                      <li key={idx} className={'flex gap-2 items-center relative text-[13px]'}>
                        {stack?.fields?.linkImage &&
                          <div className={'w-[30px] h-[30px] relative'}>
                            <Image
                              className={'rounded-md grayscale'}
                              src={'https:' + stack?.fields?.linkImage.fields.file.url}
                              quality={100}
                              alt="Work Image"
                              width={stack.fields.linkImage.fields.file.details.image.width}
                              height={stack.fields.linkImage.fields.file.details.image.height}
                            />
                          </div>
                        }
                        {stack.fields.title}
                      </li>
                    )
                  })}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      
      <section id={'contact'} className={'pb-40 max-w-[850px] mx-auto'}>
        <h2 className={'pl-10 mb-10 relative after:absolute after:ml-[20px] after:top-[12px] after:content-[""] after:w-[30%] lg:after:w-[400px] after:h-[1px] after:bg-[#ccc]'}>
          <span className={'pr-2 text-rose-500'}>04.</span>
          {contactTitle}
        </h2>
        <div className={'text-center'}>
          <div className={'text-[18px] mb-10'}>
            {parseBodyText(contactDescription)}
          </div>
          <a
            className={'text-[15px] border rounded-md py-2 px-4 transition-all ease-in-out hover:text-white hover:bg-rose-500 duration-550 border-rose-500'}
            href={'mailto:' + contactEmail}>
            {contactButtonText}
          </a>
        </div>
      </section>
    </div>
  )
}
