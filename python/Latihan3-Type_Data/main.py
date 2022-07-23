# a = 10, a adalah variable dengan nilai 10

# tipe data: angka satuan yang tidak ada koma nya (integer)
data1 = 11
print("data = ", data1)
print("- bertipe = ", type(data1))

# tipe data: angka dengan koma (float)
data2 = 12.1
print ("data = ", data2)
print ("- bertipe = ", type(data2))

# tipe data: kumpulan karakter (string)
data3 = "ikbar"
print (" data =", data3)
print ("- bertipe = ", type(data3))

# tipe data: biner true/false (boolean)
data4 = False
print ("data =", data4)
print ("- bertipe = ", type(data4))

## tipe data khusus

# bilangan kompleks
data5 = complex(5,6)
print ("data = ", data5)
print ("- bertipe = ", type(data5))

# tipe data dari bahasa C

from ctypes import c_double

data6 = c_double(10.6)
print ("data = ", data6)
print ("- bertipe = ", type(data6))

