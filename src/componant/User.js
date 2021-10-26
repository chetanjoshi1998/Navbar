import './User.css';
const User = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <h4>USER LOGIN</h4>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 align">
            <form>
              <div class="form-group row">
                <label for="staticEmail" class=" col-form-label">Email :</label>
                <div class="col-sm-10">
                  <input type="text" readonly class="form-control w-50" id="staticEmail" value="email@example.com" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class=" col-form-label">Passwor: </label>
                <div class="">
                  <input type="password" class="form-control-" id="inputPassword" placeholder="Password" />
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>


    </>
  );
}

export default User;