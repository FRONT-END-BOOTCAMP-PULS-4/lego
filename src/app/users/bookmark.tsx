import React from "react";

export default function Bookmark() {



    return(
        <>
            <div className="w-[948px] h-[74px] border-1 border-gray rounded-xl px-[36px] py-[12px]" style={{background: 'var(--blue-04)'}}>
                <div className="flex items-center h-[50px] relative">
                    <img src="/assets/image/jsicon.svg" className="w-[32px] h-[32px] mr-[24px]"/>
                    <h2 className="txt-2xl-b">HTTP 메소드에 대해 설명</h2>  {/*문제 제목 가져오기*/}
                    <img className="absolute right-0" src="/assets/image/bookmark.svg" />
                </div>
            </div>
        </>
    )
}