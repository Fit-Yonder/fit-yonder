import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { Profiles, ProfileSchema } from '/imports/api/profile/profile';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Tracker } from "meteor/tracker";
import SimpleSchema from 'simpl-schema';

/** Renders the Page for editing a single document. */
class EditProfile extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const owner = Meteor.user().username;
    const { firstName, lastName, description, image } = data;
    const workouts = doc.workouts;
    const workoutsCount = doc.workoutsCount;
    // const workouts = Profiles.findOne({ owner: 'admin@foo.com' });
    // const workoutsCount = ;
    // const { firstName, lastName, address, image, description, _id } = data;
    // schema might cause error because its missing workotus workouts count in update call
    Profiles.update(_id, { $set: { owner, firstName, lastName, description, workouts, workoutsCount, image } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }



  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" inverted textAlign="center">Edit Profile</Header>
            <AutoForm schema={ProfileSchema} onSubmit={this.submit} model={this.props.doc}>
              <Segment>
                <TextField name='firstName'/>
                <TextField name='lastName'/>
                <LongTextField name='description'/>
                <TextField name='image'/>

                {/*<TextField name='workouts'/>*/}
                {/*<TextField name='workoutsCount'/>*/}
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' />
                {/*<HiddenField name='workouts' />*/}
                {/*<HiddenField name='workoutsCount' />*/}
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Profile document in the props object. Uniforms adds 'model' to the props, which we use. */
EditProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Profiless documents.
  const subscription = Meteor.subscribe('Profiles');
  return {
    doc: Profiles.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditProfile);


// import React from 'react';
// import { Profiles, ProfileSchema } from '/imports/api/profile/profile';
// import { Container, Grid, Segment, Header } from 'semantic-ui-react';
// import AutoForm from 'uniforms-semantic/AutoForm';
// import TextField from 'uniforms-semantic/TextField';
// import LongTextField from 'uniforms-semantic/LongTextField';
// import SubmitField from 'uniforms-semantic/SubmitField';
// import HiddenField from 'uniforms-semantic/HiddenField';
// import ErrorsField from 'uniforms-semantic/ErrorsField';
// import { Bert } from 'meteor/themeteorchef:bert';
// import { Meteor } from 'meteor/meteor';
// import { Tracker } from "meteor/tracker";
// import SimpleSchema from 'simpl-schema';
//
// /** Renders the Page for adding a document. */
// class EditProfile extends React.Component {
//
//   /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//     this.insertCallback = this.insertCallback.bind(this);
//     this.formRef = null;
//   }
//
//   /** Notify the user of the results of the submit. If successful, clear the form. */
//   insertCallback(error) {
//     if (error) {
//       Bert.alert({ type: 'danger', message: `Edit failed: ${error.message}` });
//     } else {
//       Bert.alert({ type: 'success', message: 'Edit succeeded' });
//       this.formRef.reset();
//     }
//   }
//
//   /** On submit, insert the data. */
//   submit(data) {
//     const { firstName, lastName, description, image } = data;
//     const owner = Meteor.user().username;
//     const workouts = Profiles.findOne({ owner: 'admin@foo.com' });
//     const workoutsCount = ;
//     Workouts.insert({ owner, firstName, lastName, description, workouts, workoutsCount, image }, this.insertCallback);
//   }
//
//
//   /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
//   render() {
//     return (
//
//         <div className='all-page-background' style={ { padding: '4em' } }>
//           <Container>
//             <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
//               <Grid.Column>
//                 <AutoForm ref={(ref) => { this.formRef = ref; }} schema={WorkoutSchema} onSubmit={this.submit}>
//                   <Segment>
//                     <TextField name='firstName'/>
//                     <TextField name='lastName'/>
//                     <LongTextField name='description'/>
//                     <TextField name='workouts'/>
//                     <SubmitField value='Submit'/>
//                     <TextField name='image'/>
//                     <ErrorsField/>
//                     <HiddenField name='owner' value='fakeuser@foo.com'/>
//                   </Segment>
//                 </AutoForm>
//               </Grid.Column>
//             </Grid>
//           </Container>
//         </div>
//
//     );
//   }
// }
//
// export default EditProfile;
