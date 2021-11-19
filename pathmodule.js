import path from 'path'
console.log(path.basename('C:\\temp\\myfile.html'));
// Returns: 'myfile.html'

console.log(path.win32.basename('C:\\temp\\myfile.html'));
// Returns: 'myfile.html'

console.log(path.posix.basename('/tmp/myfile.html'));
// Returns: 'myfile.html'


console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// Returns: 'quux.html'

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// Returns: 'quux'


console.log(path.win32.basename('C:\\foo.html', '.html'));
// Returns: 'foo'

console.log(path.win32.basename('C:\\foo.HTML', '.html'));
// Returns: 'foo.HTML'



console.log(process.env.PATH);
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

process.env.PATH.split(path.delimiter);
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']