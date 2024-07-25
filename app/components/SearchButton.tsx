"use client";
import classes from "./SearchButton.module.css";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
export default function SearchButton() {
  return (
    <Link href="/schedule/search">
      <div className={classes.searchWrapper}>
        <CiSearch className={classes.search} />
      </div>
    </Link>
  );
}
