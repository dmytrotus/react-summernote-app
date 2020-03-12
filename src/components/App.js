import React from 'react';
import { Fragment } from 'react';

import ReactSummerNoteForm from './ReactSummerNoteForm';
import TextViewArea from './TextViewArea';



function App(){

	return(
		<Fragment>
			<div className="container">
				<h1 className="title text-center">
					This is React SummerNote App
				</h1>
			
			<ReactSummerNoteForm />
			<TextViewArea />
			</div>
		</Fragment>
		)
}


export default App;