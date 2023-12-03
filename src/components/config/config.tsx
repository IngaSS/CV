import AboutMe from '../blocks/aboutMe'
import Contacts from '../blocks/contacts'
// import Education from '../blocks/education'
import Experience from '../blocks/experience'
import Interests from '../blocks/interests'
import Skills from '../blocks/skills'

export const sections: any = [
  {
    component: (i: number, props: any) => <AboutMe key={i} {...props?.about_me} />,
  },
  { component: (i: number, props: any) => <Experience key={i} {...props?.experience} /> },
  { component: (i: number, props: any) => <Skills key={i} {...props?.skills} /> },
  // { component: (i: number, props: any) => <Education key={i} {...props?.education} /> },
  { component: (i: number, props: any) => <Interests key={i} {...props?.interests} /> },
  { component: (i: number, props: any) => <Contacts key={i} {...props?.contacts} /> },
]
