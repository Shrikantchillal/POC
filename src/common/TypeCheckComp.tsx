import React from "react";
import { ChangeAppConfig, SuperbUser } from "../pages/Home";

type TypeCheck = {
    user: Pick<SuperbUser, 'userId' | 'username'>,
    changeAppConfig: ChangeAppConfig,
}

const TypeCheckComp = (props: TypeCheck) => {
    return (
        <>Test</>
    )
};

export default TypeCheckComp;