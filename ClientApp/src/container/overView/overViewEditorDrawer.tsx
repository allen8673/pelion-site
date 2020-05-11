import React, { useState as reactUseState, useEffect } from 'react';
import { Form, Drawer, Input } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
import { type } from 'os';

type Props = Omit<DrawerProps, 'onClose'> & {
    item: any;
    onClose: (e: any) => void;

}

export default function OverViewEditorDrawer({
    item,
    onClose
}: Props) {

    const [form] = Form.useForm();

    useEffect(() => {
        console.log(44, item)
    }, []);

    return (
        <Drawer
            visible={true}
            width="40%"
            onClose={onClose as any}
        >
            <div>
                <Form
                    style={{ margin: '15px' }}
                    form={form}
                    name='detail'
                    initialValues={item}
                    layout='vertical'
                >
                    {Object.keys(item).map((k: any, idx: any) =>
                        <Form.Item
                            // style={{ display: 'inline-block', width: 'calc(70% - 5px)' }}
                            label={k}
                            name={k}
                        >
                            <Input disabled={true} />
                        </Form.Item>)}
                    {/* <Form.Item
                        // style={{ display: 'inline-block', width: 'calc(70% - 5px)' }}
                        label='date_time'
                        name='date_time'
                    >
                        <Input disabled={true} />
                    </Form.Item> */}

                </Form>
            </div>
        </Drawer>)
}

