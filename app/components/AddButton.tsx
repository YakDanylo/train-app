"use client";
import { BsPlusCircleFill } from "react-icons/bs";
import Link from "next/link";
import classes from "./AddButton.module.css";
export default function AddButton() {
  return (
    <Link href="/schedule/add" className={classes.addTrainButton}>
      <BsPlusCircleFill className={classes.plus} />
    </Link>
  );
}
