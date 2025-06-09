"use client";
import { useUser } from "@stackframe/stack";
import { redirect } from "next/navigation";

export default function Home(props: unknown) {
	const user = useUser();
	console.log("user", user);
	if (user) {
		redirect("/workspace");
	} else {
		redirect("/handler/sign-up");
	}

	return <div>{/* <UserButton /> */}</div>;
}
