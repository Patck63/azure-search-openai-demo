import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "大腸癌有什麼症狀?",
        value: "大腸癌有什麼症狀?"
    },
    { text: "電療有什麼副作用?", value: "電療有什麼副作用?" },
    { text: "癌症患者飲食有什麼需要注意?", value: "癌症患者飲食有什麼需要注意?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
