/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// z2c-alchemy.js
var b_Droppable, _url, _image, droppedFiles, $form, c_res ;

var maxSize = 2097152;

function initiateVR()
{
  c_res = $("#classifyResults");
  _url = $("#imageURL");
  _image = $("#image");
  b_Droppable = checkImageDroppable();
  if (b_Droppable)
  {  console.log("browser supports drag and drop: "+b_Droppable);

  }
  else {  console.log("browser does not support drag and drop: "+b_Droppable); }
}

function displayImageClassificationResults(_target, _data)
{
  _target.empty();

}
