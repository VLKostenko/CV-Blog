import Image from "next/image";
import {revalidateTag} from "next/cache";

// Components
import Tabs from "@/src/app/components/tabs";

// Hooks
import {getCachedItems} from "@/src/app/hooks/api/getCachedItems";
import useRichText from "@/src/app/hooks/api/useRichText";

// Seo
export const metadata = {
  title: `Volodymyr Kostenko Portfolio`,
  description: `Volodymyr Kostenko Personal Web Site, which contains a list of my works, my experience, and my skills.`,
};

export default async function Page() {
  
  revalidateTag('home');
  
  const data = await getCachedItems('2gkivy2tNKbwuPz49cweUW');
  const aboutSection = data?.aboutSection || {};
  const heroSection = data?.heroSection || {};
  const experienceSection = data?.experienceSection || {};
  
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
  
  const { parseBodyText } = useRichText();
  
  return (
    <div className="container mx-auto">
      <section id={'hero'} className={'py-40 text-left min-h-screen'}>
        <h3 className={'text-lg mb-5'}>{heroTitle}</h3>
        <h1 className={'text-6xl mb-5 leading-[70px]'}>{heroDescription}</h1>
        <h1 className={'text-6xl mb-5 leading-[70px]'}>
          {heroSecondDescription} <span className={'text-rose-500'}>{heroAccentText}</span>
        </h1>
        <h4 className={'text-lg mb-5'}>{heroSubTitle}</h4>
      </section>
      
      <section id={'about'} className={'pb-60'}>
        <h2 className={'mb-5 relative before:absolute before:left-[10%] before:top-[50%] before:content-[""] before:w-[450px] before:h-[1px] before:bg-[#ccc]'}><span className={'pr-2 text-rose-500'}>01.</span>{aboutTitle}</h2>
        <div className={'grid grid-cols-2 gap-20'}>
          <div>
            <div>{parseBodyText(aboutDescription)}</div>
            <ol className={'grid grid-cols-2 gap-2 max-w-[450px] pt-5'}>
              {aboutTechnologiesList.map((list, idx) => {
                return (
                  <li key={idx} className={'relative text-[13px] pl-5 before:absolute before:left-0 before:text-rose-500 before:content-["▹"] before:leading-[15px] before:text-[15px]'}>
                    {list.fields.title}
                  </li>
                )
              })}
            </ol>
          </div>
          
          <div className={'w-[300px] h-[380px] relative'}>
            <Image
              className={'rounded-md grayscale hover:grayscale-0'}
              src={'https://placehold.co/300x380'}
              quality={100}
              layout='fill'
              objectFit="cover"
              objectPosition='center'
              alt="User Image"
            />
          </div>
        </div>
      </section>
      
      <section id={'experience'} className={'mb-5 pb-60'}>
        <h2 className={'mb-5'}><span className={'pr-2 text-rose-500'}>02.</span>{experienceTitle}</h2>
        
        <Tabs items={experienceItems} />
      </section>
      
      <section id={'work'}>
        <h2 className={'mb-5'}><span className={'pr-2 text-rose-500'}>03.</span>Some Things I’ve Built</h2>
      </section>
    </div>
  )
}
