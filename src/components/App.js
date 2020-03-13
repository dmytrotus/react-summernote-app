import React from 'react';
import { Fragment } from 'react';

import ReactSummerNoteForm from './ReactSummerNoteForm';
import TextViewArea from './TextViewArea';



function App(){

	return(
		<Fragment>
		<section className="bg-light p-3">
			<div className="container bg-white p-3">
				<h1 className="title text-center">
					This is React SummerNote App
				</h1>
			
			<ReactSummerNoteForm />
			<TextViewArea />
			</div>
		</section>
		</Fragment>
		)
}


export default App;