from django.shortcuts import render,HttpResponse
from django.contrib import messages
from users.forms import UserRegistrationForm
from users.models import UserRegistrationModel,FlightDataModel
import io,csv
from django.conf import settings
from .FlightDataPreproces import DPDataPrePRocess
from .models import FlightDataModel from django_pandas.io import
read_frame# Create your views here.
 def UserRegisterAction(request):
 if request.method == 'POST':
 form = UserRegistrationForm(request.POST)
if form.is_valid(): print('Data is Valid')form.save()
messages.success(request, 'You have been successfully registered')
# return HttpResponseRedirect('./CustLogin')
form = UserRegistrationForm()
return render(request, 'UserRegister.html', {'form': form})
else:
print("Invalid form")
else:
 form = UserRegistrationForm()
return render(request, 'UserRegister.html', {'form': form})
def UserLoginCheck(request):
if request.method == "POST":
loginid =
request.POST.get('loginid
')pswd =
request.POST.get('pswd')
print("Login ID = ", loginid, ' Password = ', pswd)
30
try:
check = UserRegistrationModel.objects.get(loginid=loginid,
password=pswd)status = check.status
print('Status is = ', status)
if status ==
"activated":
request.session['id'
] = check.id
request.session['loggeduser'] =
check.name
request.session['loginid'] =
loginid request.session['email']
= check.email print("User id
At", check.id, status)
return render(request, 'users/UserHome.html', {})
else:
messages.success(request, 'Your Account Not at
activated')return render(request,
'UserLogin.html')
# return render(request, 'user/userpage.html',{})
except Exception
as e:
print('Exceptio
n is ', str(e))
pass
messages.success(request, 'Invalid Login id and
password')return render(request, 'UserLogin.html', {})
def UserUploadForm(request):
return render(request,'users/uploadform.html',{})
31
def UserDataUpload(request):
# declaring template
template = "users/UserHome.html"
data = FlightDataModel.objects.all()
# prompt is a context variable that can have different values depending on theircontext
prompt = {
'order': 'Order of the CSV should be name, email, address,
pho
ne, profile','profiles': data
}
# GET request returns the value of the data with the specified key.
if request.method == "GET":
return render(request,
template, prompt)csv_file =
request.FILES['file']
# let's check if it is a csv file
if not csv_file.name.endswith('.csv'):
messages.error(request, 'THIS IS NOT A
CSV FILE')
data_set = csv_file.read().decode('UTF-8')
try:
# setup a stream which is when we loop through each line we are able to handlea data
in a stream
io_string =
io.StringIO(data_set)
next(io_string)
for column in csv.reader(io_string, delimiter=',', quotechar="|"):
_, created =
FlightDataModel.objects.update_or_create(
DAY = column[1],
DEPARTURE_TIME= column[2],
FLIGHT_NUMBER= column[3],