"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
	const createUserMutation = useMutation(api.users.CreateUser);
	const user = useUser();
	const createUser = async () => {
		const res = await createUserMutation({
			name: user?.displayName as string,
			email: user?.primaryEmail as string,
			picture: user?.profileImageUrl as string,
		});
		console.log(res);
	};

	useEffect(() => {
		user && createUser();
	}, [user]);

	return <div>{children}</div>;
};

export default Provider;
