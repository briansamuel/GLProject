<?php

namespace App\Http\Controllers;
use DB;
use App\Stories;
use App\Chapters;
use App\Terms;
use App\Options;
use App\Term_Relationships;
use Illuminate\Http\Request;
use App\Http\Requests\CheckStoryRequest;
use Carbon\Carbon;
class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin/content');
    }
}
