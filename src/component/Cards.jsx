import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    Typography

  } from "@material-tailwind/react";

    const Cards = () => {
      const navigate = useNavigate();

      return (
        <section className=" h-full bg-cover "style={{ background: "linear-gradient(to right,#526D82,#9DB2BF,#526D82)" }} >

        <div className="p-6 w-full flex flex-wrap h-full gap-8 justify-center">

      <Card
      shadow={false}
      className="relative grid  rounded-[15px] cursor-pointer items-end justify-center overflow-hidden text-center w-[400px] h-[350px] "
      onClick={() => navigate("/add-lecture")}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full   bg-[url('https://www.freecodecamp.org/news/content/images/2020/09/image-21.png')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 hover:opacity-80" />
      </CardHeader>
      <CardBody className="relative py-5 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className=" font-medium leading-[1.5]"
        >
          Data Structre
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400 ">
          LEC-1
        </Typography>
        
      </CardBody>
    </Card>

    <Card
      shadow={false}
      className="relative grid  rounded-[15px] cursor-pointer items-end justify-center overflow-hidden text-center w-[400px] h-[350px] "
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full   bg-[url('https://www.freecodecamp.org/news/content/images/2020/09/image-21.png')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 hover:opacity-80" />
      </CardHeader>
      <CardBody className="relative py-5 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className=" font-medium leading-[1.5]"
        >
          Data Structre
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400 ">
          LEC-2
        </Typography>
        
      </CardBody>
    </Card>
    <Card
      shadow={false}
      className="relative grid  rounded-[15px] cursor-pointer items-end justify-center overflow-hidden text-center w-[400px] h-[350px] "
      onClick={() => navigate("/add-lecture")}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full   bg-[url('https://www.freecodecamp.org/news/content/images/2020/09/image-21.png')] bg-cover bg-center"
      >
        <div className=" to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 hover:opacity-80" />
      </CardHeader>
      <CardBody className="relative py-5 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className=" font-medium leading-[1.5]"
        >
          Data Structre
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400 ">
LEC-3     </Typography>
        
      </CardBody>
    </Card>
    <Card
      shadow={false}
      className="relative grid  rounded-[15px] cursor-pointer items-end justify-center overflow-hidden text-center w-[400px] h-[350px] "
      onClick={() => navigate("/add-lecture")}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full   bg-[url('https://www.freecodecamp.org/news/content/images/2020/09/image-21.png')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 hover:opacity-80" />
      </CardHeader>
      <CardBody className="relative py-5 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className=" font-medium leading-[1.5]"
        >
          Data Structre
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400 ">
          LEC-4
        </Typography>
        
      </CardBody>
    </Card>
    </div>
   </section>

    )
}

export default Cards;