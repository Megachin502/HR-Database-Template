import { useEffect, useRef } from 'react'
const UploadWidget = () => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dvkbd4vt0',
        uploadPreset: 'geafvcre',
      },
      function (error, result) {
        console.log(result.info.original_filename)
      },
    )
  }, [])
  return <button onClick={() => widgetRef.current.open()}>Upload</button>
}
export default UploadWidget
