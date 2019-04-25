@extends('_layouts.master')

@section('body')
	@include('_partials.header')

	@yield('content')

	@include('_partials.footer')

@endsection
