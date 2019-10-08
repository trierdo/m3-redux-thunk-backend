import mongoose from 'mongoose';

// initial state 
export const initial = {
	UI: {
		counter: 1,
		loggedIn: false,
		waitingForResponse: false,
		UIversion:'01',
	},
	BM: {
        assets:[
            {
            _id: mongoose.Types.ObjectId().toString(),
            asset_name: "This is an example, press Edit to change name and Value",
            asset_value: 0
            }
        ]
	}
};
