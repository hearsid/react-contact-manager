<h2 class="page-header text-center">List of contacts</h2>
<p class="text-center">
    <a ui-sref="add" class="btn btn-lg btn-outline" >Add Contact</a>
</p>
<ul class="media-list row contacts-container">
    <li ng-repeat="contact in vm.contacts" class="my-repeat-animation contacts media col-md-6 col-lg-4">
        {{$index+1}}
        <span ng-include="'app/templates/contact.tpl.html'"></span>
    </li>
</ul>
