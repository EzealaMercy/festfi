// import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkIcon from '@mui/icons-material/Link';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function FirstSection() {
  return (
    <div className="mx-4 mt-4 relative md:mt-8 md:mx-10">
      <div className="h-72 bg-slate-400 rounded"></div>
      <div>
      <div className="absolute top-2 left-1 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full p-1 m-1">
        <ArrowBackIcon className="text-black" />
      </div>
      <div className="absolute top-2 right-14 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full p-1 m-1">
        <LinkIcon/>
      </div>

      <div className="absolute top-2 right-1 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full p-1 m-1">
        <TelegramIcon/>
      </div>

      </div>
    
    </div>
  );
}
