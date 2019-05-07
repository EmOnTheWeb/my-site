@extends('_layouts.master')

@section('body')
	@include('_partials.header')

	@include('_partials.top-section')
	
	@include('_partials.content-block-sections')

	@include('_partials.portfolio-section')
	
	@include('_partials.testamonials-section')

	@include('_partials.form')
	
	@include('_partials.footer')

@endsection
