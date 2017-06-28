$(function() {



	// CKEDITOR.editorConfig = function(config) {
	// 	// config.language = 'en',
	// 	// config.height = 350;

	// 	config.toolbar_Basic =
	// 	[
	// 		['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','About']
	// 	];


	// };



// CKEDITOR.editorConfig = function( config )
// {
// 	config.toolbar = 'MyToolbar';
 
// 	config.toolbar_MyToolbar =
// 	[
// 		{ name: 'document', items : [ 'NewPage','Preview' ] },
// 		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
// 		{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','Scayt' ] },
// 		{ name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'
//                  ,'Iframe' ] },
//                 '/',
// 		{ name: 'styles', items : [ 'Styles','Format' ] },
// 		{ name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
// 		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote' ] },
// 		{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },
// 		{ name: 'tools', items : [ 'Maximize','-','About' ] }
// 	];
// };






// 	CKEDITOR.replace( 'editor', {toolbar : 'MyToolbar'});



	// CKEDITOR.replace( 'editor',
	// 	{
	// 		toolbar :
	// 		[
	// 			{ name: 'basicstyles', items : [ 'Bold','Italic' ] },
	// 			{ name: 'paragraph', items : [ 'NumberedList','BulletedList' ] },
	// 			{ name: 'tools', items : [ 'Maximize','-','About' ] }
	// 		]
	// 	});


	// CKEDITOR.replace('editor',{
	// 	toolbar : 'Basic'
	// });

	CKEDITOR.editorConfig = function(config) {

		config.toolbar = 'Teste';


		config.toolbar_Teste =
		[
			{ name: 'document', items : [ 'NewPage','Preview' ] },
		];


	}



	CKEDITOR.replace('editor', {toolbar: 'Teste'});



});