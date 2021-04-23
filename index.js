import ioHook from 'iohook'

ioHook.on('keydown', function (event) {
  console.log(event)
})

ioHook.registerShortcut([68], function () {
  console.log('A')
})

ioHook.start()
