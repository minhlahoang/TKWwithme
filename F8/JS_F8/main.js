var emailKey = 'ch';

var myInfo = {
    name: 'Xuan Hoang',
    age :18,
    address: 'Ha Noi, VN',
    [emailKey]: 'deptrai', // chuyen value duoi dang bien
}

myInfo.email = 'dxh4402@gmail.com'; //them moi mot key value
myInfo['xh-email'] = 'dxh44f02@gmail.com'; //them moi mot key value vi pham quy tac dat ten

console.log(myInfo);
console.log(myInfo.name) // lay value ra ngoai

delete myInfo.address // xoa key