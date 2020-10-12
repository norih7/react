import * as React from "react";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import * as styles from "./styles.module.css";

const Items = (props: any) => {
    const { allItem, filter } = props;
    const result = [] as any;
    Object.keys(filter).forEach((key: any) => {
        const find = allItem.edges.filter((item: any) => {
            return item.node[key].find((element: any) => {
                return element == filter[key];
            });
        });
        result[key] = find;
    });

    let list: any[] = [];
    Object.keys(result).forEach((key: any) => {
        list = result[key].map((item: any) => {
            const { node } = item;
            const { name } = node;
            console.log("!!!", name);
            return <li>{name}</li>;
        });
    });

    console.log("!!!", list);
    if (list.length == 0) {
        console.log("!!!pass");
        list.push(<li>なし</li>);
    }

    return (
        <div className={styles["items"]}>
            <h3>入手アイテム</h3>
            <ul>{list}</ul>
        </div>
    );
};

export default Items;