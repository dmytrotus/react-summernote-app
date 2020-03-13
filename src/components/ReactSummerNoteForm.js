import React from 'react';

import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ReactSummernote from 'react-summernote';
//import 'react-summernote/dist/react-summernote.css';
//import './css/summernote.css';
//import 'react-summernote/lang/summernote-ru-RU';


function ReactSummerNoteForm(){

  $( document ).ready(function() {
    console.log( "ready!" );
});
	
	return(
		<div>

		Hello, I'm form

		<ReactSummernote
        value="Default value"
        options={{
          lang: 'ru-RU',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        
      />

		</div>

	)
}


export default ReactSummerNoteForm;