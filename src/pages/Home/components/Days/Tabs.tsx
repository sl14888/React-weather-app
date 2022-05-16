import React from 'react'
import s from './Days.module.scss'

type Props = {}

export interface Tab {
    value: string;
}

const Tabs = (props: Props) => {
    const tabs: Tab[] = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        },
    ];
    return (
        <div className={s.tab}>
            <div className={s.tabs_wrapper}>
                {tabs.map((tab) => (
                    <div className={s.tab} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={s.tab_cancel}>Отменить</div>
        </div>
    )
}

export default Tabs