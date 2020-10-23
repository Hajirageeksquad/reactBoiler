import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import {updateService} from '../../context/services/update'
import firebase from '../../firebase'
export default (props: any) => {
    let {
        history
    } = props;
    const {state, getDataAction, delDataAction, dispatch}: any = useContext(GlobalContext);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState();
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');

    return (
        <div className="">
            <div className="py-5">
                <div className="mt-8">
                    {update &&
                    <div className="flex justify-between m-4">
                        <label className=" text-base mb-2 flex  font-bold w-1/4">Edit title:</label>
                        <input
                            type="text"
                            className="my-1 p-1  outline-none border w-1/4"
                            name="title"
                            placeholder="title"
                            value={title ? title : ""}
                            onChange={
                                (e) => {
                                    setTitle(e.target.value)
                                }
                            }
                        />

                        <button className=" bg-green-400 hover:bg-green-500 w-1/3 py-2 text-white w-1/4"
                                onClick={() => {
                                    let dub = [...data];
                                    let filter: any = dub.filter((single: any) => single.id === id);
                                    filter[0].title = title;
                                    updateService(id, dub, dispatch)
                                }}>Update
                        </button>
                    </div>
                    }
                    <button className="my-4 bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                            onClick={() => {
                                firebase.auth().signOut().then(() => {
                                    state.loader=true;
                                    history.push("/login")
                                })
                            }}>
                        Logout
                    </button>
                    <button className="my-4 bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick={() =>
                         getDataAction(dispatch)
                        }

                    >getData
                    </button>
                    {state.data.map((sin: any, index: number) =>
                        <div key={index} className="flex justify-between m-4">
                            <p key={index} className="text-base mb-2 flex  font-bold w-1/4">{sin.id} {sin.title}</p>
                            <button className=" bg-green-400 hover:bg-green-500 w-1/3 py-2 text-white w-1/4"
                                    onClick={() => {
                                        let filter = state.data.filter((single: any) => single.id !== sin.id);
                                        delDataAction(sin.id, filter, dispatch)
                                    }}>del
                            </button>

                            <button className=" bg-green-400 hover:bg-green-500 w-1/3 py-2 text-white w-1/4"
                                    onClick={() => {
                                        setTitle("")
                                        setUpdate(true)
                                        setId(sin.id)
                                        setData(state.data)

                                    }}>edit record
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}