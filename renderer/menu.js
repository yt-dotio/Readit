// Modules
const {remote, shell} = require('electron')

// Menu template
const template = [
    {   
        label: 'Items',
        submenu: [ 
            {
                label: 'Add New',
                click: window.newItem,
                accelerator: 'CmdOrCtrl+O'
            },
            {
                label: 'Read Item',
                click: window.openItem,
                accelerator: 'CmdOrCtrl+Enter'
            },
            {
                label: 'Delete Item',
                click: window.deleteItem,
                accelerator: 'CmdOrCtrl+Backspace'
            },
            {
                label: 'Open in Browser',
                accelerator: 'CmdOrCtrl+Shift+O',
                click: window.openItemNative
            },
            {
                label: 'Search Items',
                accelerator: 'CmdOrCtrl+S',
                click: window.searchItems
            }
        ]
    },
    {
        role: 'editMenu'
    },
    {
        role: 'windowMenu'
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn more',
                click: () => { shell.openExternal('https://github.com/stackacademytv/master-electron') }
            }
        ]
    }


]

// Set Mac-specific first item-menu
if (process.platform === 'darwin') {
    template.unshift({
        label: remote.app.getName(),
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    })
}

// Build menu
const menu = remote.Menu.buildFromTemplate(template)

// Set as main app menu
remote.Menu.setApplicationMenu(menu)

 