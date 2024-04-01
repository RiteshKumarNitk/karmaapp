import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {Send, Download } from "lucide-react";
import {
  RiArrowDownCircleLine,
  RiBriefcase4fill,
  RiTeamFill,
  RiTodoFill,
  RiarrowdownsLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Bedge from "./Bedge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28  bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl-mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ">
              web developer
            </div>
            <h1 className="h1">Hello, my name is Ritesh </h1>
            <p className="subtitle">
              Brief Description with insights into myself, my voctional journey
              and what i engage in professionally.
            </p>
            {/* <div className="bg-orange text-white ">button</div> */}
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download
                <Download size={18} />
            </Button>
            </div>
            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" inconsStyles='text-foreground text-[22px] hover:text-primary transition-all ' />
          </div>
          <div className="hidden xl:flex relative"> 
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg/>
           </div>
        </div>
      </div>
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownCircleLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
