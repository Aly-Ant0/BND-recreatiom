//https://www.shadertoy.com/view/MtKXzc
void mainImage( out vec4 O,  vec2 U )
{
    vec2 R = iResolution.xy;
    float C = 0.-U.y/R.y + .06;
	U =5.* ( U+U-R) / R.y;         // normalized coordinates
    //U.y = 1.-U.y*2.;                   // swap vertical
    U /= 1.+U.y/5.5;                // perspective
    U.y += iTime;
    U = abs(fract(U)-.50);           // distance to axis
    U = .2/ sqrt(U);                // turn to blured line
    O = (U.x*C+U.y*C*2.) * vec4(1.2,.4,1.,0) * C + vec4(.1,0.1,.2,0.) * C; // combine H&V + color * inverted fade
}