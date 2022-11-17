$('#btnRotateCamera').on('click', function () {
            //e.preventDefault();
            Webcam.reset();
            
            debugger;
            $("#lblfilename").html('');
            filename = "";
            //document.getElementById("file").value = null;
            var cameraStatus = Webcam.params.constraints.facingMode;
            if (cameraStatus == "environment") {
                Webcam.set({
                    width: 320,
                    height: 240,
                    image_format: 'jpeg',
                    jpeg_quality: 90,
                    // I add this object constraints
                    constraints: {
                        facingMode: { exact: 'user' }
                    }
                });
            }
            else {
                Webcam.set({
                    width: 320,
                    height: 240,
                    image_format: 'jpeg',
                    jpeg_quality: 90,
                    // I add this object constraints
                    constraints: {
                        facingMode: 'environment'
                    }
                });
            }
           
            Webcam.attach('#my_camera01');
            document.getElementById('take_snapshot01').style.display = '';
            document.getElementById('pre_take_buttons01').style.display = '';
            $(".class_cam01").css("display", "flex");

            $('#InsuranceImageModel').find('.modal-header').find('.modal-title').text('Take Photo for Photo ID, Driver License or Passport File');
        })
