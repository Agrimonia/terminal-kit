#!/usr/bin/env node
/*
	The Cedric's Swiss Knife (CSK) - CSK terminal toolbox test suite
	
	Copyright (c) 2009 - 2014 Cédric Ronvel 
	
	The MIT License (MIT)
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

"use strict" ;



/* jshint unused:false */



var termkit = require( '../lib/termkit.js' ) ;
var term = termkit.terminal ;

var moved = 0 ;

//*
function moveRedraw()
{
	//buffer.drawChars() ;
	buffer.draw() ;
	buffer.x ++ ;
	
	buffer2.draw() ;
	buffer2.x -- ;
	
	buffer3.x = Math.floor( Math.random() * 8 ) ;
	buffer3.draw() ;
	
	if ( moved ++ < 20 ) { setTimeout( moveRedraw , 150 ) ; }
	else
	{
		term.hideCursor( false ) ;
		term.fullscreen( false ) ;
	}
}
//*/

var buffer = termkit.ScreenBuffer24Bits.create( { dst: term , width: 8 , height: 8 } ) ; //.clear() ;
buffer.put( { x: 3 , y: 2 , attr: { color: 'red' , bgColor: 'brightBlack' , underline: true } } , 'toto' ) ;
buffer.put( { x: 4 , y: 5 , attr: { color: 'brightYellow' , bold: true } } , '𝌆' ) ;	// <-- takes more than one UCS-2 character

var buffer2 = termkit.ScreenBuffer24Bits.create( { dst: term , width: 3 , height: 1 , x: 70 , y: 3 } ) ; //.clear() ;
buffer2.put( { x: 0 , y: 0 , attr: { color: 'yellow' } } , '<--' ) ;

var buffer3 = termkit.ScreenBuffer24Bits.create( { dst: buffer , width: 3 , height: 3 , x: 2 , y: 6 } ) ; //.clear() ;
buffer3.put( { x: 1 , y: 1 , attr: { color: 'brightMagenta' } } , '*' ) ;

//buffer3.draw() ;
//buffer.dump() ; return ;

term.fullscreen() ;
term.hideCursor() ;
moveRedraw() ;



