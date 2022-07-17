import React, { useMemo, useContext, useCallback } from "react";

import { IncreaseAction } from "./actions/Actions";

const MemoComponent = memo(() => {
	const { state, dispatch } = useContext(store);
	const changeCount = useCallback(() => IncreaseAction(dispatch), []);
	const changeName = useCallback(() => ChangeName(dispatch), []);

	return useMemo(
		() => (
			<>
				{console.log("it is not renderings")}
				<div className="border-red-300 border-2">
					change the count Total
					<div>
						<button onClick={changeCount} className="bg-slate-400 p-4 cursor-pointer m-2">
							Change Count
						</button>
						<button onClick={changeName} className="bg-slate-400 p-4 cursor-pointer m-2">
							Change Name
						</button>
					</div>
				</div>
			</>
		),
		[]
	);
});

//we have memoized the component because we are only changing the state by dispatch and not using the updated state in the component

export default MemoComponent;
