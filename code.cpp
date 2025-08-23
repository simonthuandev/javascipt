#include <iostream>

using namespace std;

int main() {
    int a[10];
    for (int i = 0; i < 10; i++) {
        a[i] = i + 10;
    }
    for (int i = 0; i < 10; i++) {
        cout << a[i] << ' ';
    }
    cout << endl;
    for (int &it : a) {
        it = 1; 
    } 
    for (int it : a) {
        cout << it << ' ';
    }
    cout << endl;
    return 0;
}
