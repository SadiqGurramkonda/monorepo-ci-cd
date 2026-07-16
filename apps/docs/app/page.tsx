"use client"

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Card } from "@repo/ui/card";
import { useState } from "react";


export default function Home() {
  const [num1,setNum1] = useState<number>(0);
  const [num2,setNum2] = useState<number>(0);
  const sum = num1+num2;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>calculate sum</h3>
        <div>
          the sum is: {num1+num2}
        </div>
        <input onChange={(e)=>{setNum1(Number(e.target.value) )}} type="number"></input>
        <input onChange={(e)=>{setNum2(Number(e.target.value) )}} type="number"></input>
      </main>
    </div>
  );
}
