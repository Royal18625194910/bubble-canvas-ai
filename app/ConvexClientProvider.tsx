"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import Provider from "./Provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
	return (
		<Suspense fallback={<Loading />}>
			<ConvexProvider client={convex}>
				<Suspense fallback={<Loading />}>
					<Provider>{children}</Provider>
				</Suspense>
			</ConvexProvider>
		</Suspense>
	);
}
