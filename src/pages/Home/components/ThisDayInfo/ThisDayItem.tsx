import React from 'react'
import { Item } from './ThisDayInfo';
import s from './thisDayInfo.module.scss'

type Props = {
    item: Item;
}

const ThisDayItem = ({ item }: Props) => {
    const [icon_id, name, value] = item
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelecor id={icon_id} />
            </div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>
        </div>
    )
}

export default ThisDayItem