import React, { useState, useEffect } from 'react';
import { apiCaller } from 'service/apiCaller';
import { getAllDevicelog } from 'api/deviceDirectory'
import { Table } from "antd";
import { ColumnType } from 'antd/es/table/interface';
import OverViewEditorDrawer from './overViewEditorDrawer'

export const OverView: React.FC = () => {
    const [list, setList] = useState<any[]>();
    const [item, setItem] = useState<any>();

    const [showDetail, setShowDetail] = useState<boolean>(false);

    const getList = () => {
        apiCaller(getAllDevicelog,
            {},
            (res: any) => {
                const caseRows: any[] = res.data.data;
                console.log(7777, res)
                setList(caseRows)
                // setList(caseRows);
            },
            (error: any) => { console.log(error); }
        )
    }

    useEffect(() => {
        getList();
    }, []);

    const columns: ColumnType<any>[] = [
        {
            title: 'deviceId',
            dataIndex: 'device_id',
            render: (v: any, r: any) => <a onClick={() => { setItem(r); setShowDetail(true); }}>{v}</a>,
        },
        {
            title: 'eventType',
            dataIndex: 'event_type',
        },
        {
            title: 'description',
            dataIndex: 'description',
        }
    ]

    return (
        <div className='main' >
            {showDetail && <OverViewEditorDrawer onClose={() => { setShowDetail(false) }} item={item} />}
            <Table columns={columns} dataSource={list} />
        </div>)
}