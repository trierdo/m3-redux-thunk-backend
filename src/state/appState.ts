import mongoose from 'mongoose';

export interface IUI{
    counter: number;
    loggedIn: boolean;
    waitingForResponse:boolean;
    UIversion:string;
}

interface IAssetData {
    _id: string;
    asset_name: string;
    asset_value: number;
  }

export interface IBM{
    assets:IAssetData[]
}


export interface IState{
    UI:IUI;
    BM:IBM;
}

// initial state 
export const initial:IState = {
	UI: {
		counter: 0,
		loggedIn: false,
		waitingForResponse: false,
		UIversion:'01',
	},
	BM: {
        assets:[
            {
            _id: mongoose.Types.ObjectId().toString(),
            asset_name: "Porsche comes from redux state",
            asset_value: 50000
            }
        ]
	}
};
