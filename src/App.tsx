import { EnvelopeFill, Github, Globe2, Linkedin } from "react-bootstrap-icons";

import Avatar from "@/components/Avatar";
import { Icon, IconList } from "@/components/Icon";
import { Link, LinkList } from "@/components/Link";
import Usertag from "@/components/UserTag";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 w-screen h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-200">
      <Avatar src="https://avatars.githubusercontent.com/u/46366493?v=4" />
      <Usertag>@ribborges</Usertag>
      <LinkList>
        <Link href="https://www.linkedin.com/in/ribborges/"><span>LinkedIn</span></Link>
        <Link href="https://www.richardborges.dev/"><span>Portfolio</span></Link>
        <Link href="https://github.com/ribborges/"><span>Github</span></Link>
        <Link href="mailto:contato@richardborges.dev"><span>Email</span></Link>
      </LinkList>
      <IconList>
        <Icon href="https://www.linkedin.com/in/ribborges/"><Linkedin /></Icon>
        <Icon href="https://www.richardborges.dev/"><Globe2 /></Icon>
        <Icon href="https://github.com/ribborges"><Github /></Icon>
        <Icon href="mailto:contato@richardborges.dev"><EnvelopeFill /></Icon>
      </IconList>
    </main>
  )
}