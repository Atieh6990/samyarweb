<?php
/**
 * Created by PhpStorm.
 * User: AliZand
 * Date: 3/7/2018
 * Time: 12:02 AM
 */
<?php namespace App\Http\Controllers;

use Session;
use Request;
use DB;
use CRUDBooster;
use Morilog\Jalali\jDateTime;
class AdminPm1Controller extends \crocodicstudio\crudbooster\controllers\CBController {

	public function cbInit() {

		# START CONFIGURATION DO NOT REMOVE THIS LINE
		$this->title_field = "id";
		$this->limit = "2000";
		$this->orderby = "pm_id,asc";
		$this->global_privilege = false;
		$this->button_table_action = true;
		$this->button_bulk_action = false;
		$this->button_action_style = "button_icon";
		$this->button_add = false;
		$this->button_edit = true;
		$this->button_delete = true;
		$this->button_detail = true;
		$this->button_show = true;
		$this->button_filter = true;
		$this->button_import = false;
		$this->button_export = false;
		$this->table = "pm";
		# END CONFIGURATION DO NOT REMOVE THIS LINE
		//$request = Request::all();


		# START COLUMNS DO NOT REMOVE THIS LINE
		$this->col = [];

		$this->col[] = ["label"=>"تاریخ و زمان","name"=>"pm_date","width"=>"100"];
		$this->col[] = ["label"=>"پیام","name"=>"pm_text","width"=>"300"];
		$this->col[] = ["label"=>"نام خانوادگی","name"=>"pm_send_fk","join"=>"samuser,samusr_family","width"=>"100"];
		$this->col[] = ["label"=>"نام","name"=>"pm_send_fk","join"=>"samuser,samusr_name","width"=>"100"];



		# END COLUMNS DO NOT REMOVE THIS LINE

		# START FORM DO NOT REMOVE THIS LINE
		$this->form = [];
		//$this->form[] = ['label'=>'Pm Id','name'=>'pm_id','type'=>'select2','validation'=>'required|integer|min:0','width'=>'col-sm-10','datatable'=>'pm,id'];
		$this->form[] = ['label'=>'Pm Send Fk','name'=>'pm_send_fk','type'=>'number','validation'=>'required|integer|min:0','width'=>'col-sm-10'];
		$this->form[] = ['label'=>'Pm Receive Fk','name'=>'pm_receive_fk','type'=>'number','validation'=>'required|integer|min:0','width'=>'col-sm-10'];
		$this->form[] = ['label'=>'Pm Text','name'=>'pm_text','type'=>'textarea','validation'=>'required|string|min:5|max:5000','width'=>'col-sm-10'];
		$this->form[] = ['label'=>'Pm Date','name'=>'pm_date','type'=>'datetime','validation'=>'required|date_format:Y-m-d H:i:s','width'=>'col-sm-10'];
		$this->form[] = ['label'=>'Pm Status','name'=>'pm_status','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10'];
		$this->form[] = ['label'=>'Pm Delete','name'=>'pm_delete','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10'];
		$this->form[] = ['label'=>'Pm Online','name'=>'pm_online','type'=>'text','validation'=>'required|min:1|max:255','width'=>'col-sm-10'];
		# END FORM DO NOT REMOVE THIS LINE

		# OLD START FORM
		//$this->form = [];
		//$this->form[] = ["label"=>"Pm Id","name"=>"pm_id","type"=>"select2","required"=>TRUE,"validation"=>"required|integer|min:0","datatable"=>"pm,id"];
		//$this->form[] = ["label"=>"Pm Send Fk","name"=>"pm_send_fk","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
		//$this->form[] = ["label"=>"Pm Receive Fk","name"=>"pm_receive_fk","type"=>"number","required"=>TRUE,"validation"=>"required|integer|min:0"];
		//$this->form[] = ["label"=>"Pm Text","name"=>"pm_text","type"=>"textarea","required"=>TRUE,"validation"=>"required|string|min:5|max:5000"];
		//$this->form[] = ["label"=>"Pm Date","name"=>"pm_date","type"=>"datetime","required"=>TRUE,"validation"=>"required|date_format:Y-m-d H:i:s"];
		//$this->form[] = ["label"=>"Pm Status","name"=>"pm_status","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
		//$this->form[] = ["label"=>"Pm Delete","name"=>"pm_delete","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
		//$this->form[] = ["label"=>"Pm Online","name"=>"pm_online","type"=>"text","required"=>TRUE,"validation"=>"required|min:1|max:255"];
		# OLD END FORM

		/*
		| ----------------------------------------------------------------------
		| Sub Module
		| ----------------------------------------------------------------------
		| @label          = Label of action
		| @path           = Path of sub module
		| @foreign_key 	  = foreign key of sub table/module
		| @button_color   = Bootstrap Class (primary,success,warning,danger)
		| @button_icon    = Font Awesome Class
		| @parent_columns = Sparate with comma, e.g : name,created_at
		|
		*/
		$this->sub_module = array();


		/*
		| ----------------------------------------------------------------------
		| Add More Action Button / Menu
		| ----------------------------------------------------------------------
		| @label       = Label of action
		| @url         = Target URL, you can use field alias. e.g : [id], [name], [title], etc
		| @icon        = Font awesome class icon. e.g : fa fa-bars
		| @color 	   = Default is primary. (primary, warning, succecss, info)
		| @showIf 	   = If condition when action show. Use field alias. e.g : [id] == 1
		|
		*/
		$this->addaction = array();
		$actual_link = 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

		/*
		| ----------------------------------------------------------------------
		| Add More Button Selected
		| ----------------------------------------------------------------------
		| @label       = Label of action
		| @icon 	   = Icon from fontawesome
		| @name 	   = Name of button
		| Then about the action, you should code at actionButtonSelected method
		|
		*/
		$this->button_selected = array();


		/*
		| ----------------------------------------------------------------------
		| Add alert message to this module at overheader
		| ----------------------------------------------------------------------
		| @message = Text of message
		| @type    = warning,success,danger,info
		|
		*/
		$this->alert        = array();



		/*
		| ----------------------------------------------------------------------
		| Add more button to header button
		| ----------------------------------------------------------------------
		| @label = Name of button
		| @url   = URL Target
		| @icon  = Icon from Awesome.
		|
		*/
		$this->index_button = array();



		/*
		| ----------------------------------------------------------------------
		| Customize Table Row Color
		| ----------------------------------------------------------------------
		| @condition = If condition. You may use field alias. E.g : [id] == 1
		| @color = Default is none. You can use bootstrap success,info,warning,danger,primary.
		|
		*/
		$request = Request::all();

		$this->table_row_color = array();
		$this->table_row_color[] = ['condition'=>'[pm_send_fk] == '.$request['userTwo'],'color'=>'info'];
		$this->table_row_color[] = ['condition'=>'[pm_send_fk] == '.$request['userOne'],'color'=>'success'];



		/*
		| ----------------------------------------------------------------------
		| You may use this bellow array to add statistic at dashboard
		| ----------------------------------------------------------------------
		| @label, @count, @icon, @color
		|
		*/
		$this->index_statistic = array();
		$this->bulk_actions= array();



		/*
		| ----------------------------------------------------------------------
		| Add javascript at body
		| ----------------------------------------------------------------------
		| javascript code in the variable
		| $this->script_js = "function() { ... }";
		|
		*/

		$this->nameUser = DB::table('samuser')->select('samusr_name','samusr_family')->where('samusr_id','=',$request['userOne'])->first();
		//  dd(  Request::fullUrl());

		$this->script_js = '
			
		window.onload = Scrolldown;
	
			function Scrolldown(){
				
				
				var first_name=[];
				var last_name=[];
				var txt=[];
				var time=[];
				
				
				//alert("1111");
				 window.scrollTo(0, 972);
				 
				 setInterval(function(){ 

             $.ajax({url: "'.CRUDBooster::mainpath("refresh").'?sender='.$request['userOne'].'&receiver='.$request['userTwo'].'", success: function(data){
				 
				 
		
		      var obj = jQuery.parseJSON(data);
			  
			 // console.log(obj);
			 

			 //  console.log("---------"+td.length);
			   for(var i=0; i<obj.length; i++){
				   
				   first_name[i] = obj[i]["samusr_name"];
				   last_name[i] = obj[i]["samusr_family"];
				   txt[i] = obj[i]["pm_text"];
				   time[i] = obj[i]["pm_date"];

				   var tr = $("<div></div>");
				   tr.attr("style","border: 1px solid red;");
				   $("#table_dashboard").append("<tr class=\"success\"><td>"+time[i]+"</td><td>"+txt[i]+"</td><td>"+last_name[i]+"</td><td>"+first_name[i]+"</td></tr>");
				   
				     
			   }
			 

		   

		  // location.reload();
		   


		   
		   
		  // alert("bbb");
		   
		   

        }});


			},3000);
				
			}

			
			$(".button_action").css( "display", "none" );
			$("tr th:eq(4)").css( "display", "none" );
			$("#table_dashboard thead th:eq(5)").css( "display", "none" );
			$("#table_dashboard tbody td:nth-of-type(5)").css( "display", "none" );
			$("#table_dashboard tfoot th:eq(4)").css( "display", "none" );
			$("#table_dashboard tfoot th:eq(5)").css( "display", "none" );
			
		
           
 
			
		
	
			';
		if($request['userOne']){

			$this->script_js .= '
				
				
				';


		}
		// $this->pms = DB::table('pm')->select('pm_id','pm_send_fk','pm_receive_fk');
		// dd($this->pms);


		/*
		| ----------------------------------------------------------------------
		| Include HTML Code before index table
		| ----------------------------------------------------------------------
		| html code to display it before index table
		| $this->pre_index_html = "<p>test</p>";
		|
		*/


		$this->pre_index_html = '
			
			<p style="position:relative; top:30px;">
			<a title="Return" href="https://samyar.rasgames.ir/pannel/samyar/public/admin/pm">
			<i class="fa fa-chevron-circle-left"></i>
			   Back To List Data pm</a>
			</p>
			
			<div id ="user_id" class="btn-sm btn-primary" style="width:125px; position: relative;left: 5px;top: 45px;z-index: 1; font-size: 16px;font-family: BYekan;text-align:center" >'.$this->nameUser->samusr_name.' '.$this->nameUser->samusr_family.'</div>
	
			
			
			';



		/*
		| ----------------------------------------------------------------------
		| Include HTML Code after index table
		| ----------------------------------------------------------------------
		| html code to display it after index table
		| $this->post_index_html = "<p>test</p>";
		|
		*/

		$this->post_index_html = null;
		$this->post_index_html = '
			
			<div id="parent" style= "width:820px; height:28px;">
			<form  method="post" id="form" enctype="multipart/form-dataform-data" action="'.CRUDBooster::mainpath('data-form').'">
			 <input type="hidden" name="_token" value="'. csrf_token() .'">
			 <input id="userOne" name="userOne" value="'.$request["userOne"].'" type="hidden">
			 <input id="userTwo" name="userTwo" value="'.$request["userTwo"].'" type="hidden">			  
			 <input id="pmOnline" name="pmOnline" value="'.$request["pmOnline"].'" type="hidden">			  
			 <input id="return" name="return" value="'.$actual_link.'" type="hidden">			  
			 <textarea id="pm-text" name="pmText" style="float: right; width: 92%; " rows="1" cols="100"></textarea>
			
			  <input type="submit"  value="Send" style="float: left;width:7%">
			</form> 
            </div>
	        ';



		/*
		| ----------------------------------------------------------------------
		| Include Javascript File
		| ----------------------------------------------------------------------
		| URL of your javascript each array
		| $this->load_js[] = asset("myfile.js");
		|
		*/
		$this->load_js = array();
		// $this->load_js[] = 'setInterval(function(){ alert("Hello"); },1000);';



		/*
		| ----------------------------------------------------------------------
		| Add css style at body
		| ----------------------------------------------------------------------
		| css code in the variable
		| $this->style_css = ".style{....}";
		|
		*/
		$this->style_css = NULL;
		$this->style_css = "td{direction:rtl;text-align:justify}";



		/*
		| ----------------------------------------------------------------------
		| Include css File
		| ----------------------------------------------------------------------
		| URL of your css each array
		| $this->load_css[] = asset("myfile.css");
		|
		*/
		$this->load_css = array();


	}

	public function postDataForm() {


		$request = Request::all();
		// dd($request['pmOnline']);
		$id = DB::table('pm')->insertGetId(
			['pm_send_fk' => $request['userTwo'], 'pm_receive_fk' => $request['userOne'],'pm_text' => $request['pmText'],'pm_date' => date("Y-m-d H:i:s"),'pm_online' => $request['pmOnline']]);

		CRUDBooster::redirect($request["return"],trans("crudbooster.alert_send_pm_success"),'success');
	}

	public function getRefresh(){

		$request = Request::all();
		// echo($request['receiver']);


		$rslt = DB::table('pm')
			->where('pm_status','=','0')
			->where('pm_send_fk','=',$request['sender'])
			->where('pm_receive_fk','=',$request['receiver'])
			->join('samuser', 'pm_send_fk', '=', 'samusr_id')
			->select('samuser.samusr_name','samuser.samusr_family','pm.pm_id','pm.pm_text','pm.pm_date')
			->get();



		if(count($rslt)>0){

			$result =[];
			for($i=0;$i<count($rslt);$i++){

				$result[$i]["pm_date"] = jDateTime::strftime('Y-m-d H:i:s', strtotime($rslt[$i]->pm_date)); // 1395-02-19;
				$result[$i]["samusr_name"] = $rslt[$i]->samusr_name;
				$result[$i]["samusr_family"] = $rslt[$i]->samusr_family;
				$result[$i]["pm_id"] = $rslt[$i]->pm_id;
				$result[$i]["pm_text"] = $rslt[$i]->pm_text;


				$id = $rslt[$i]->pm_id;

				$update = DB::table('pm')->where('pm_id', $id)->update(['pm_status'=>1]);
				//die($update);

			}
			echo json_encode($result,true);


		}else{

			echo '{"rsl":"no"}';

		}




	}

	/*
	| ----------------------------------------------------------------------
	| Hook for button selected
	| ----------------------------------------------------------------------
	| @id_selected = the id selected
	| @button_name = the name of button
	|
	*/
	public function actionButtonSelected($id_selected,$button_name) {
		//Your code here





	}



	/*
	| ----------------------------------------------------------------------
	| Hook for manipulate query of index result
	| ----------------------------------------------------------------------
	| @query = current sql query
	|
	*/
	public function hook_query_index(&$query) {
		//Your code here

		$request = Request::all();
		//dd($request);
		DB::table('pm')
			->where('pm_id', $request['pmId'])
			->update(['pm_status' => 1]);

		if(isset($request['userOne'])&&isset($request['userTwo'])){
			//die('22222222');
			if($request['userTwo']=='2117'){


				//die('2117');
				$query->where([
					['pm_receive_fk',$request['userOne']],
					['pm_send_fk',$request['userTwo']]])->orWhere([
					['pm_receive_fk',$request['userTwo']],
					['pm_send_fk',$request['userOne']]]);



			}else{
				//die('2116');
				$query->where([
					['pm_receive_fk',$request['userOne']],
					['pm_send_fk',$request['userTwo']]])->orWhere([
					['pm_receive_fk',$request['userTwo']],
					['pm_send_fk',$request['userOne']]]);

			}







		}else{






		}

	}

	/*
	| ----------------------------------------------------------------------
	| Hook for manipulate row of index table html
	| ----------------------------------------------------------------------
	|
	*/
	public function hook_row_index($column_index,&$column_value) {
		//Your code here
		//die();
		$request = Request::all();
		if($column_index==0){

			$column_value = jDateTime::strftime('Y-m-d H:i:s', strtotime($column_value)); // 1395-02-19

		}else if($column_index==3){

			//dd($column_value);
			if($column_value==null){
				//die('yees');
				$column_value="سام یار";

			}else{

				//	die('nooo');
			}



		}
	}

	/*
	| ----------------------------------------------------------------------
	| Hook for manipulate data input before add data is execute
	| ----------------------------------------------------------------------
	| @arr
	|
	*/
	public function hook_before_add(&$postdata) {
		//Your code here

	}

	/*
	| ----------------------------------------------------------------------
	| Hook for execute command after add public static function called
	| ----------------------------------------------------------------------
	| @id = last insert id
	|
	*/
	public function hook_after_add($id) {
		//Your code here

	}

	/*
	| ----------------------------------------------------------------------
	| Hook for manipulate data input before update data is execute
	| ----------------------------------------------------------------------
	| @postdata = input post data
	| @id       = current id
	|
	*/
	public function hook_before_edit(&$postdata,$id) {
		//Your code here

	}

	/*
	| ----------------------------------------------------------------------
	| Hook for execute command after edit public static function called
	| ----------------------------------------------------------------------
	| @id       = current id
	|
	*/
	public function hook_after_edit($id) {
		//Your code here

	}

	/*
	| ----------------------------------------------------------------------
	| Hook for execute command before delete public static function called
	| ----------------------------------------------------------------------
	| @id       = current id
	|
	*/
	public function hook_before_delete($id) {
		//Your code here

	}

	/*
	| ----------------------------------------------------------------------
	| Hook for execute command after delete public static function called
	| ----------------------------------------------------------------------
	| @id       = current id
	|
	*/
	public function hook_after_delete($id) {
		//Your code here

	}



	//By the way, you can still create your own method in here... :)


}