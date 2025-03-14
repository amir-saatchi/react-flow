"use client";

import { useReactFlow, type Node, type NodeProps } from "@xyflow/react";
import { Remark } from "react-remark";
import { Badge } from "./ui/badge";
import { Dispatch, SetStateAction, useCallback } from "react";
import { Button } from "./ui/button";

export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;

export type SlideNode = Node<SlideData, "slide">;

export type SlideData = {
  source: string;
  left?: string;
  up?: string;
  down?: string;
  right?: string;
};

export function Slide({ data,id}: NodeProps<SlideNode>) {
  const { fitView } = useReactFlow();

  const moveToNextSlide = useCallback(
    (event: React.MouseEvent, id: string,type:"L" | "R") => {
      event.stopPropagation();
      let newId = type === "L" ? -1 : 1;
      newId += parseInt(id)
      console.log(id)
      console.log("new ID",newId)
      fitView({ nodes: [{ id:newId.toString() }], duration: 250 });
    },
    [fitView],
  );
  
  return (
    <article>
      <div className="text-red-500 border-2 w-[300px] h-[200px] flex flex-col items-center justify-around">
        <h2>Hi there</h2>
        <Remark>{data.source}</Remark>
        <Badge>Badge</Badge>
        <div className="flex flex-row items-center justify-between">
          <Button onClick={(event) => moveToNextSlide(event,id,"L" )}>left </Button>
          <Button onClick={(event) => moveToNextSlide(event,id,"R")}>right </Button>
        </div>
      </div>
    </article>
  );
}
