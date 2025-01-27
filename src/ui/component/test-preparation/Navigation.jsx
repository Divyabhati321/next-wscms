"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import bgpath1 from "../../../../public/Header/bgpath1.png";
import bgpath2 from "../../../../public/Header/bgpath2.png";
import bgpath3 from "../../../../public/Header/bgpath3.png";
import Image from "next/image";
import { AccomodationIcon, AdmissionIcon, BlogIcon, CalenderIcon, DocsIcon, EligibilityIcon, ExampatternIcon, FeesIcon, FinanceIcon, FullmockIcon, LanguageIcon, ListeningIcon, ReadingIcon, RegisterIcon, ResultIcon, SpeakingIcon, SyllabusIcon, VisaIcon, WritingIcon, CoachingIcon, BookieltsIcon, BandScoreIcon, BandCalculatorIcon, NewsICon, UkFlag, CaFlag, IrFlag, UsFlag, AuFlag, NzFlag, ItFlag, MtFlag, HuFlag, InFlag, DeFlag, PteIcon, DuolingoIcon, GmatIcon, SATIcon, TofelIcon, GermanIcon, SpanIcon, FranchIcon, CueCardsIcon, MediaIcon, SelfHelpKitIcon } from "@/ui/component/CustomIcons";
import { Button, useDisclosure } from "@nextui-org/react";
import LoginSignup from "../modal/LoginSignup";
import AuthButton from "../buttons/AuthButton";
import { useDispatch } from "react-redux";
import { setLoginState } from "@/redux/slices/loginPopupSlice";
import { setBookState } from "@/redux/slices/bookSessionSlice";

const Navigation = ({ header, nextDashboard, IsAuthenticate, examname }) => {
  const dispatch = useDispatch();
  const CountryItems = [<UkFlag />, <CaFlag />, <IrFlag />, <UsFlag />, <AuFlag />, <NzFlag />, <ItFlag />, <MtFlag />, <HuFlag />, <InFlag />, <DeFlag />];
  const AboutItems = [<CoachingIcon />, <EligibilityIcon />, <ExampatternIcon />, <SyllabusIcon />, <FeesIcon />, <CalenderIcon />, <RegisterIcon />, <ResultIcon />, <BandScoreIcon />];
  const TestPrepItems = [<PteIcon />, <DuolingoIcon />, <GmatIcon />, <SATIcon />, <TofelIcon />, <GermanIcon />, <SpanIcon />, <FranchIcon />];
  const Resources = [<MediaIcon />, <NewsICon />, <BlogIcon />, <BandCalculatorIcon />, <ReadingIcon />, <ListeningIcon />, <CueCardsIcon />, <SelfHelpKitIcon />]
  const Services = [<AdmissionIcon />, <LanguageIcon />, <VisaIcon />, <FinanceIcon />, <AccomodationIcon />, <DocsIcon />, <BookieltsIcon />];  
  const countriesMenu = [
    {
      title: "United Kingdom",
      path: "/study-in-uk",
      desc: "100+ Universities",
    },
    {
      title: "Canada",
      path: "/study-in-canada",
      desc: "100+ Universities",
    },
    {
      title: "Ireland",
      path: "/study-in-ireland",
      desc: "100+ Universities",
    },
    {
      title: "United States",
      path: "/study-in-usa",
      desc: "100+ Universities",
    },
    {
      title: "Australia",
      path: "/study-in-australia",
      desc: "100+ Universities",
    },
    {
      title: "Newzealand",
      path: "/study-in-newzealand",
      desc: "100+ Universities",
    },
    {
      title: "Italy",
      path: "/study-in-italy",
      desc: "100+ Universities",
    },
    {
      title: "Malta",
      path: "/study-in-malta",
      desc: "100+ Universities",
    },
    {
      title: "Hungary",
      path: "/study-in-hungary",
      desc: "100+ Universities",
    },
    {
      title: "India",
      path: "/study-in-india",
      desc: "100+ Universities",
    },
    {
      title: "Germany",
      path: "/study-in-germany",
      desc: "100+ Universities",
    },
  ];
  const testPrepMenu = [
    {
      title: "PTE",
      path: "/test-preparation/pte",
      desc: "Conquer the world with your English skills",
    },
    { title: "Duolingo", path: "", desc: "Revolutionize Your Dreams with DET" },
    { title: "GMAT", path: "", desc: "Lead the world with your expertise" },
    { title: "SAT", path: "", desc: "Enhance Your Aptitude Skills" },
    {
      title: "Toefl",
      path: "",
      desc: "Stand Confidently with Your English Abilities",
    },
    {
      title: "German",
      path: "/language-courses/german-language",
      desc: "Embrace  German from Oktoberfest to Everyday Life",
    },
    {
      title: "Spanish",
      path: "/language-courses/spanish-language",
      desc: "Master Spanish To Conquer the world",
    },
    {
      title: "French",
      path: "/language-courses/french-language",
      desc: "Learn to Répondez s'il vous plaît",
    },
  ];
  const [url, setUrl] = useState("");

  const ListItem = React.forwardRef(
    ({ className, title, children, onClick, ...props }, ref) => {
      const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };

      return (
        <li key={title} className="flex w-full items-center">
          <NavigationMenuLink asChild>
            <Link
              ref={ref}
              className={cn(
                "w-full block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none  sub-menu",
                className
              )}
              onClick={handleClick}
              {...props}
            >
              <div className="text-[14px] font-medium leading-none capitalize">
                {title}
              </div>
              <p className="titlecase line-clamp-1 text-[12px] text-[#797979] leading-snug flex items-center gap-2">
                {children}
              </p>
            </Link>
          </NavigationMenuLink>
        </li>
      );
    }
  );

  ListItem.displayName = "ListItem";
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="items-baseline">
          {/* Countries */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[14px] bg-[transparent] capitalize p-1">
              Countries
            </NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-xl">
              <ul className="grid w-[400px] p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] backdrop-blur-xl">
                {countriesMenu?.map((AboutItem, index) => (
                  <div
                    key={AboutItem.title}
                    className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-xl">{CountryItems[index]}</div>
                    <ListItem title={AboutItem.title} href={AboutItem.path}>
                      {AboutItem.desc}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Services */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[14px] bg-[transparent] capitalize p-1">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] backdrop-blur-xl">
                {header?.services.map((Service, index) =>
                  Service.path ? (
                    Service.title == "Book My IELTS" ||
                      Service.title == "Book My PTE" ? (
                      <div
                        key={Service?.title}
                        onClick={
                          IsAuthenticate
                            ? undefined
                            : () =>
                              dispatch(
                                setLoginState({
                                  redirectUrl: `${Service?.path}`,
                                  status: "true",
                                })
                              )
                        }
                        className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-xl ">{Services[index]}</div>
                        <ListItem
                          title={Service?.title}
                          href={
                            IsAuthenticate
                              ? Service?.path
                                ? Service?.path
                                : "#"
                              : "#"
                          }
                        >
                          {Service?.desc}
                        </ListItem>
                      </div>
                    ) : (
                      <div
                        key={Service.title}
                        className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-xl ">{Services[index]}</div>
                        <ListItem
                          title={Service.title}
                          href={Service.path ? Service.path : "#"}
                        >
                          {Service.desc}
                        </ListItem>
                      </div>
                    )
                  ) : (
                    <div
                      key={Service.title}
                      onClick={() => dispatch(setBookState({ status: "true" }))}
                      className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-xl ">{Services[index]}</div>
                      <ListItem title={Service.title} href="#">
                        {Service.desc}
                      </ListItem>
                    </div>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* About ielts */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[14px] bg-[transparent] capitalize p-1">
              IELTS
            </NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-xl">
              <ul className="grid w-[400px] p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] backdrop-blur-xl">
                {header?.aboutItems.map((AboutItem, index) => (
                  <div
                    key={AboutItem.title}
                    className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-xl">{AboutItems[index]}</div>
                    <ListItem title={AboutItem.title} href={AboutItem.path}>
                      {AboutItem.desc}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[14px] bg-[transparent] capitalize p-1">
              Mock Test
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid p-2 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                <li className="order-2 row-span-5 h-full overflow-hidden bg-[#EFE1DA] rounded-[9px]">
                  <NavigationMenuLink asChild>
                    <div className="relative engagement-strip-1 flex h-full w-full select-none flex-col justify-between rounded-md pt-5 p-4 no-underline outline-none focus:shadow-md">
                      <p className="z-20 text-[28px] ">
                        Buy Mock Test Package and get{" "}
                        <span className="font-semibold">Flat 50% OFF</span>
                      </p>
                      {IsAuthenticate ? (
                        <Link
                          href={`${nextDashboard}plans`}
                          className="rounded-lg p-2 text-center z-20 block bg-white font-medium text-[15px] hover:scale-105 transition-all"
                        >
                          Buy Package
                        </Link>
                      ) : (
                        <div
                          onClick={() =>
                            dispatch(
                              setLoginState({
                                redirectUrl: `${nextDashboard}plans`,
                                status: "true",
                              })
                            )
                          }
                          className="rounded-lg p-2 text-center z-20 block bg-white font-medium text-[15px] hover:scale-105 transition-all"
                        >
                          Buy Package
                        </div>
                      )}
                      <Image
                        src={bgpath3}
                        width={95}
                        height={107}
                        className=" absolute right-2 bottom-[20%]"
                      />
                      <Image
                        src={bgpath1}
                        className="absolute top-0 left-0 z-10"
                      />
                      <Image
                        src={bgpath2}
                        className="absolute right-0 bottom-0 z-10"
                      />
                    </div>
                  </NavigationMenuLink>
                </li>
                <div className="order-1">
                  {header?.mockItems.map((MockItem, index) => (
                    <div
                      key={MockItem.title}
                      className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-xl ">{MockItems[index]}</div>
                      <ListItem title={MockItem.title} href={MockItem.path}>
                        {MockItem.desc}
                      </ListItem>
                    </div>
                  ))}
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          {/* Test preparation */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[14px] bg-[transparent] capitalize p-1">
              Test Preparation
            </NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-xl">
              <ul className="grid w-[400px] p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] backdrop-blur-xl">
                {testPrepMenu.map((AboutItem, index) => (
                  <div
                    key={AboutItem.title}
                    className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-xl">{TestPrepItems[index]}</div>
                    <ListItem title={AboutItem.title} href={AboutItem.path}>
                      {AboutItem.desc}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pre ielts menu items */}
          {/* <NavigationMenuItem className="cursor-pointer">
            {IsAuthenticate ? (
              <NavigationMenuLink
                href={header?.preIeltsExam}
                className="text-[#001713] text-[14px] font-medium capitalize p-2 relative rounded-md hover:bg-accent hover:text-accent-foreground  focus:text-accent-foreground focus:outline-none"
              >
                <span className="absolute -top-1 left-0 animate-bounce">
                  <Image
                    src="/test-preparation/freeIeltsLogo.png"
                    alt={`free ${examname} Logo`}
                    width={35}
                    height={14}
                  />
                </span>
                pre-{examname == "pte" ? "PTE" : "IELTS"} test
              </NavigationMenuLink>
            ) : (
              <div
                onClick={() =>
                  dispatch(
                    setLoginState({
                      redirectUrl: `${header?.preIeltsExam}`,
                      status: "true",
                    })
                  )
                }
                className="text-[#001713] text-[14px] font-medium capitalize p-2 relative rounded-md hover:bg-accent hover:text-accent-foreground  focus:text-accent-foreground focus:outline-none"
              >
                <span className="absolute -top-1 left-0 animate-bounce">
                  <Image
                    src="/test-preparation/freeIeltsLogo.png"
                    alt={`free ${examname} Logo`}
                    width={35}
                    height={14}
                  />
                </span>
                pre-{examname == "pte" ? "PTE" : "IELTS"} test
              </div>
            )}
          </NavigationMenuItem> */}
          {/* Book Ielts menuitem */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/blog"
              className="text-[#001713] text-[14px] font-medium capitalize p-2 hover:bg-accent hover:text-accent-foreground  focus:text-accent-foreground focus:outline-none rounded-md"
            >
              Blogs
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[14px] bg-[transparent] capitalize p-1">
              More
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] backdrop-blur-xl">
                {header?.resources.map((Resource, index) => (
                  <div
                    key={Resource.title}
                    className="mb-0 rounded-[15px] font-medium capitalize text-[14px] text-[#001713] flex items-center select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-xl ">{Resources[index]}</div>
                    <ListItem title={Resource.title} href={Resource.path}>
                      {Resource.desc}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Pricing Menuitems */}
          {/* <NavigationMenuItem className="cursor-pointer">
            {IsAuthenticate ? (
              <NavigationMenuLink
                href={header?.pricing}
                className="text-[#001713] text-[14px] font-medium capitalize p-2 hover:bg-accent hover:text-accent-foreground  focus:text-accent-foreground focus:outline-none rounded-md"
              >
                Pricing
              </NavigationMenuLink>
            ) : (
              <div
                onClick={() =>
                  dispatch(
                    setLoginState({
                      redirectUrl: `${header?.pricing}`,
                      status: "true",
                    })
                  )
                }
                className="text-[#001713] text-[14px] font-medium capitalize p-2 hover:bg-accent hover:text-accent-foreground  focus:text-accent-foreground focus:outline-none rounded-md"
              >
                Pricing
              </div>
            )}
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
