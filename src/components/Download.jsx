import React from 'react';

const FileDownloader = ({ fileName, fileUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className='bg-gradient-to-r from-green-800 to-green-600 text-white rounded-md p-2 m-2'>
      Download {fileName}
    </button>
  );
};

export default FileDownloader;
